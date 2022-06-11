export default function create(jsonChar) {

    function createHeader(name, first=false) {
        // <h5 class="mt-2">Spheres</h5>
        let baseH = document.createElement('h4');
        baseH.innerHTML = name;
        if (!first) { baseH.classList.add('mt-4'); }
        return baseH;
    }
    
    function createSubheader(name, muted=false) {
        // <h5 class="mt-2">Spheres</h5>
        let baseH = document.createElement('h5');
        baseH.innerHTML = name;
        baseH.classList.add('mt-2');
        if (muted) { baseH.classList.add('text-muted') }
        return baseH;
    }
    
    function createTrait(name, n, specialisations=[]) {
        // <div>
        //     {{ name }} <small>{% include {{ dots }} n=n max=max %}</small>
        //     <small class="text-muted{% if specialisation == "nil" %} invisible{% endif %}">{{specialisation}}</small>
        // </div>

        let maxN = 5;
        
        let bold = false;
        
        let fill = '●', noFill='○';

        if (specialisations.includes('affinity')) {
            specialisations = specialisations.filter(value => value != 'affinity');
            bold = true;
        } else if (name == 'Arete') {
            bold = true;
            maxN = 10;
        } else if (name == 'Willpower') {
            maxN = 10;
        } else if (typeof(n) == 'string') {
            bold = true;
        }

        let baseDiv = document.createElement('div');
        if (bold) {
            let boldName = document.createElement('strong');
            boldName.innerHTML = name + ' ';
            baseDiv.appendChild(boldName);
        } else {
            baseDiv.innerHTML = name + ' ';
        }

        let dots;
    
        if (typeof(n) == 'number') {
            dots = document.createElement('small');
            if(maxN != 0) {
                dots.innerHTML = fill.repeat(n) + noFill.repeat(maxN-n);
            } else {
                dots.innerHTML = fill.repeat(n);
            }
        } else if (typeof(n) == 'string') {
            dots = document.createTextNode(n);
        } else {
            dots = undefined
        }
        
        baseDiv.appendChild(dots)
        baseDiv.appendChild(document.createTextNode('\n'));
        
        let specs = document.createElement('small');
        specs.classList.add('text-muted');
        if (specialisations == []) { specs.classList.add('invisible'); }
        for(let s in specialisations) {
            specs.innerHTML = specs.innerHTML + specialisations[s] + ' ';
        }
        baseDiv.appendChild(specs)
        return baseDiv;
    }
    
    function generateCharacterSheet(charSheet, headingFn, subheadingFn, traitFn) {
        let root = document.getElementById('sheet');

        // Calculate sheet experience
        let experiencedSheet = charSheet;

        function applyExperience(object, expTrait, value) {
            for (let prop in object) {
                if (prop != 'Experience') {

                    if (prop == expTrait) {

                        if (typeof(object[prop]) == 'object' && typeof(value) != 'object') {
                            object[prop][0] = value;
                        } else if (typeof(object[prop]) == 'object' && typeof(value) == 'object') {
                            object[prop][0] = value[0];
                            object[prop] = object[prop].concat( value.slice(1));
                        } else {
                            object[prop] = value;
                        }
                        
                    } else if (typeof(object[prop]) == 'object') {
                        object[prop] = applyExperience(object[prop], expTrait, value);
                    }

                }
            }
            
            return object;
        }

        charSheet['Experience'].forEach((entry, i) => {

            for(let trait in entry) {

                let level = -1
                if (i < level | level == -1) {
                    experiencedSheet = applyExperience(experiencedSheet, trait, entry[trait]);
                }

            }

        });

        function render(root, object, level=0) {
            Object.keys(object).forEach((key, i) => {
                if (key != 'Experience') {
                    if (typeof(object[key]) == 'object' & !Array.isArray(object[key])) {
                        let heading;
                        switch (level) {
                            case 0: heading = headingFn(key, i == 0? true: false); break;
                            case 1: heading = subheadingFn(key); break;
                            default: heading = subheadingFn(key, true);
                        }
                        root.appendChild(heading);
                        let newRoot = document.createElement('div');
                        root.appendChild(newRoot);
                        render(newRoot, object[key], level+1);
                    } else {
                        if (typeof(object[key]) == 'object') {
                            root.appendChild(traitFn(key, object[key][0], object[key].slice(1)));
                        } else {
                            root.appendChild(traitFn(key, object[key]))
                        }
                    }
                }
            });
        }

        render(root, experiencedSheet);
    }

    generateCharacterSheet(jsonChar, createHeader, createSubheader, createTrait);
}
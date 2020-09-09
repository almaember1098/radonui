// the component manager class
// it manages components

export class ComponentManager {
    static _components={}

    // creates a new component
    // example:
    // ComponentManager.createComponent('hello', new StaticComponent(null, null))
    static createComponent(name, object) {
        this._components[name]=object
    }
    static render(name, attr) {
        return this._components[name].render(attr)
    }
}


// the RadonJS component class
// this is the base class of all
// RadonJS components

export class RadonComponent {

    // the name of the component
    _componentName
    // the template
    _template
    constructor(componentName, template) {
        this._componentName=componentName
        this._template=template
    }
}


// static component baseclass

export class StaticComponent extends RadonComponent {
    constructor(componentName, template) {
        super(componentName, template)
    }

    // simply returns the template.
    // and we will not use the attr parameter
    render(attr) {
        return this._template
    }
}

// renders all and every component(s)
function renderComponents() {
    // names for the attributes helping with the rendering
    const attrNameComp="rn-render"
    const attrNameModel="rn-model"
    // get all elements in <body>
    var elements=document.getElementsByTagName("*")
    // iterate over the elements
    Array.prototype.filter.call(elements, function(el) {
        var doRender=el.hasAttribute(attrNameComp)
        var hasModel=el.hasAttribute(attrNameModel)

        if(doRender) {
            // render the component
            var compName=el.getAttribute(attrNameComp)
            var modelName
            if(hasModel) {
                modelName=el.getAttribute(attrNameModel)
            } else {
                modelName=null
            }
            el.innerHTML=ComponentManager.render(compName, eval(modelName))
        }
    })
}
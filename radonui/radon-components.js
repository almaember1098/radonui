// the component manager class
// it manages components

class ComponentManager {
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

class RadonComponent {

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

class StaticComponent extends RadonComponent {
    constructor(componentName, template) {
        super(componentName, template)
    }

    // simply returns the template.
    // and we will not use the attr parameter
    render(attr) {
        return this._template
    }
}
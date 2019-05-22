
// the base class of all models
class RadonModel {
    // private field, list of functions to
    // notify on change
    // I know it's not really private, but don't
    // use it outside this class!
    _notify
    _modelName

    constructor(modelName) {
        this._notify=[]
        this._modelName=modelName
    }

    // adds a change listener
    subscribe(func) {
        this._notify.push(func)
    }

    // you call it when data was changed.
    // please note that we pass the model name
    // to the function, so it
    // can identify the model
    notifyEveryone() {
        this._notify.forEach(func => {
            func(this._modelName)
        })
    }

}
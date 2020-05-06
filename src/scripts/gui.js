let panels = {
    form: {
        object: document.getElementById('form-panel'),

        _active: null,
        set active(tool) {
            if (this._active !== tool) {
                this._active = tool;
                this.object.style.display = "block";

                this.object.innerText = this._active.name;
            } else {
                this._active = null;
                this.object.style.display = "none";
            }
        },
        get active() {
            return this._active;
        }
    },
    edit: {
        object: document.getElementById('edit-panel'),

        _active: null,
        set active(tool) {
            if (this._active !== tool) {
                this._active = tool;
                this.object.style.display = "block";

                this.object.innerText = this._active.name;
            } else {
                this._active = null;
                this.object.style.display = "none";
            }
        },
        get active() {
            return this._active;
        }
    }
}

class TwoWayBinding {
    _inputObject = Element;
    _value;

    constructor(inputObject) {
        this._inputObject = inputObject;
        this._inputObject.addEventListener('input', (event) => { this.value = event.target.value });
    }

    set(val) {
        this._value = val;
        this._inputObject.value = val;
    }
    get() {
        return this._value;
    }
}

let testBinding = new TwoWayBinding(document.getElementById('test-input'));

window.testBinding = testBinding;



/* Temporary tool objects, will be moved to seprate file */
let tools = {
    edit: {
        edit1: {
            name: "Edit 1"
        },
        edit2: {
            name: "Edit 2"
        },
        edit3: {
            name: "Edit 3"
        },
        edit4: {
            name: "Edit 4"
        },
        edit5: {
            name: "Edit 5"
        },
    },
    form: {
        form1: {
            name: "Form 1"
        },
        form2: {
            name: "Form 2"
        },
        form3: {
            name: "Form 3"
        },
        form4: {
            name: "Form 4"
        },
        form5: {
            name: "Form 5"
        },
    }
}

document.getElementById('edit-button-1').addEventListener('click', () => { panels.edit.active = tools.edit.edit1 });
document.getElementById('edit-button-2').addEventListener('click', () => { panels.edit.active = tools.edit.edit2 });
document.getElementById('edit-button-3').addEventListener('click', () => { panels.edit.active = tools.edit.edit3 });
document.getElementById('edit-button-4').addEventListener('click', () => { panels.edit.active = tools.edit.edit4 });
document.getElementById('edit-button-5').addEventListener('click', () => { panels.edit.active = tools.edit.edit5 });

document.getElementById('form-button-1').addEventListener('click', () => { panels.form.active = tools.form.form1 });
document.getElementById('form-button-2').addEventListener('click', () => { panels.form.active = tools.form.form2 });
document.getElementById('form-button-3').addEventListener('click', () => { panels.form.active = tools.form.form3 });
document.getElementById('form-button-4').addEventListener('click', () => { panels.form.active = tools.form.form4 });
document.getElementById('form-button-5').addEventListener('click', () => { panels.form.active = tools.form.form5 });



export default {
    
}
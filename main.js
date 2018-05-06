class List {
    constructor(location, options) {
        this.location = location;
        this.options = options;
        this.renderStaticForm();
        this.render();
    }

    renderStaticForm() {
        this.form = document.createElement("FORM");
        this.form.classList.add("form");
        this.form.setAttribute("id","form");
        this.input = document.createElement("INPUT");
        this.input.setAttribute("id", "input");
        this.add = document.createElement("BUTTON");
        this.add.innerHTML = "+";
        this.add.setAttribute("id", "input");
        this.delete = document.createElement("BUTTON");
        this.delete.setAttribute("id", "delete");
        this.delete.innerHTML="-";
        this.form.appendChild(this.input);
        this.form.appendChild(this.add);
        this.form.appendChild(this.delete);
        this.location.appendChild(this.form);
    }

    render() {
        this.list = document.createElement(this.options.parentElement);
        this.add.addEventListener("click", this.addElement.bind(this));
        this.delete.addEventListener("click", this.deleteElement.bind(this));
        this.selectedElements = document.getElementsByClassName("selected");

        for (let i = 0; i < this.options.arrOfItems.length; i++) {
            let li = document.createElement(this.options.itemElement);
            li.innerHTML = this.options.arrOfItems[i], this.list.appendChild(li);
        }

        this.location.appendChild(this.list);
        this.form = this.location.querySelector("#form");
        this.form.addEventListener("submit", this.addElement.bind(this));
        this.list.addEventListener('click', this.setSelection.bind(this));
    }

    addElement(input) {
        if (input = this.input.value) {
            let li = document.createElement(this.options.itemElement);
            li.innerHTML = input;
            this.list.appendChild(li);
            this.input.value = null;
        }
        event.preventDefault();
    }

    deleteElement() {
        let selectedElem = [].slice.call(this.selectedElements);
        // console.log(selectedElem);
        for (let i = 0; i < selectedElem.length; i++) {
            selectedElem[i].parentNode.removeChild(selectedElem[i]);
        }
        this.delete.style.display = "none";
    }

    setSelection(e) {
        if("LI" == e.target.tagName) {
            if (this.options.ctrl && e.ctrlKey) {
                this.ctrlSelect(e);
            } else {
                this.liSelect(e);
            }
        }
        this.displayDelete();
    }
    liSelect(e) {
        let selected = [].slice.call(this.list.children);
        for (let e = 0; e < selected.length; e++) {
            selected[e].classList.remove("selected");
        }
        e.target.classList.toggle("selected");
    }

    ctrlSelect(e) {
        e.target.classList.toggle("selected");

    }
    displayDelete()
    {
        this.delete.style.display = "inline";
    }


}
class GetterSetter {
    #data = {};

    get props() {
        console.log(this.#data);
        return this.#data;
    }

    set setProps(aObj) {
        console.log(aObj);
        this.#data = aObj;
    }

    set updateProps(aObj) {
        console.log(aObj);
        this.#data = {...this.#data, ...aObj};
    }
}


var test1 = new GetterSetter();
test1.setProps = {prop1: 'a'};
test1.updateProps = {prop2: 'b'};
test1.props;

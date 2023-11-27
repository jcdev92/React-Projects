(() => {

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';
    interface HtmlElementProps {
        id: string;
        type: HtmlType;
    };

    class HtmlElement {
        public id: string;
        public type: HtmlType = 'input';

        constructor({ id }: HtmlElementProps) {
            this.id = id;
        };
    };

    interface InputAttributesProps {
        value: string;
        placeholder: string;

    };

    class InputAttributes {
        public value: string;
        public placeholder: string;
        constructor({ value, placeholder, }: InputAttributesProps) {
            this.value = value;
            this.placeholder = placeholder;
        };
    };



    class InputEvents {
        constructor() {
        };

        setFocus() { };
        getValue() { };
        isActive() { };
        removeValue() { };
    };


    //? Idea para la nueva clase InputElement

    interface HtmlAndInputsProps {
        id: string;
        value: string;
        placeholder: string;
    };

    class InputElement {
        public html: HtmlElement;
        public attributes: InputAttributes;
        public events: InputEvents;
        constructor({ id, value, placeholder }: HtmlAndInputsProps) {
            this.html = new HtmlElement({ id, type: 'input' });
            this.attributes = new InputAttributes({ value, placeholder });
            this.events = new InputEvents();
        };
    };

    const nameField = new InputElement({ value: 'Fernando', placeholder: 'Enter first name', id: 'txtName' });

    console.log({ nameField });

})();
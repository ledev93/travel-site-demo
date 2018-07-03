import $ from 'jquery';

class Modal{
    constructor(){
        this.openModalButton = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalButton = $('.modal__close');
        this.events();
    }
    
    events() {
        // click on open modal button
        this.openModalButton.click(this.openModal.bind(this));
        // click on close modal button
        this.closeModalButton.click(this.closeModal.bind(this));
        // pushes any key
        $(document).keyup(this.keyPressHandler.bind(this));
        
    }
    
    keyPressHandler(e){
        if (e.keyCode == 27){
            this.closeModal()
        }
    }
    
    openModal() {
        this.modal.addClass('modal--is-visable');
        return false;
    }
    
    closeModal() {
        this.modal.removeClass('modal--is-visable');
    }
}

export default Modal;
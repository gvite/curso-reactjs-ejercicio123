export class Contact {
    name = '';
    firstname = '';
    email = '';
    connected = false;
    constructor(item){
        if (item) {
            this.name = item.name ? item.name : '';
            this.firstname = item.firstname ? item.firstname : '';
            this.email = item.email ? item.email : '';
            this.connected = item.connected ? item.connected : false;
        }
    }
}
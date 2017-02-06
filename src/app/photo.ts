export class Photo{
    public selected:boolean;
    
    constructor( 
        public  id:string,
        public server: string,
        public secret: string,
        public farm: string,
    ){
        this.selected = false;
    }


    get getUrl():string{
        return `https://farm${this.farm}.staticflickr.com/${this.server}/${this.id}_${this.secret}_q.jpg`;
    }

    toggle(){
        this.selected = !this.selected;
    }
}
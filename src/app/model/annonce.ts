export interface annonce{
    id?:number;
    title: string,
    email: string,
    surface: number,
    image_url: string,
    adresse: string,
    detail: string,
    prix: number,
    date: Date,
    etat: boolean,
    alouer:boolean,
    nom_vendeur:string,
    email_vendeur:string,
    tel_vendeur:string,
}
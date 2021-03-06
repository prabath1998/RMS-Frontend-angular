import { Injectable } from "@angular/core";

export interface Menu{
    state:string;
    name:string;
    icon:string;
    role:string
}

const MENU_ITEMS = [
    {state:'dashboard',name:'Dashboard',icon:'dashboard',role:''},
    {state:'category',name:'Manage Categories',icon:'category',role:'admin'},
    {state:'product',name:'Manage Products',icon:'menu_book',role:'admin'},
    {state:'order',name:'Orders',icon:'list_alt',role:''},
    {state:'bill',name:'Bills',icon:'receipt',role:''},
    {state:'user',name:'Manage Users',icon:'people',role:'admin'}
    
];

@Injectable()
export class MenuItems{
    getMenuItem():Menu[]{
        return MENU_ITEMS;
    }
}
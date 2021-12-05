export interface ApiObject {
    _links: Links;
    _embedded: Embedded;
    page_count: number;
    page_size: number;
    total_items: number;
    page: number;
  }
  export interface Links {
    self: SelfOrFirstOrLast;
    first: SelfOrFirstOrLast;
    last: SelfOrFirstOrLast;
  }
  export interface SelfOrFirstOrLast {
    href: string;
  }
  export interface Embedded {
    donadores?: (DonadoresEntity)[] | null;
  }
  export interface DonadoresEntity {
    iddonadores: string;
    nombre: string;
    usuario: string;
    donacion: string;
    niveldonador: string;
    pais: string;
    fecha: string;
    _links: Links1;
  }
  export interface Links1 {
    self: SelfOrFirstOrLast;
  }
  
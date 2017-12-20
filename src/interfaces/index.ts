export
declare interface Identifiable {
  id?: any;
}

export
declare interface ILink extends Identifiable {
  name: string,
  to: string,
  isActive?: boolean
}
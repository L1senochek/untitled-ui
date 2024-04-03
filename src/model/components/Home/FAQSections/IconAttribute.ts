interface IAttribute {
  src: string;
  name: string;
}

interface IIconAttribute {
  plus: IAttribute;
  minus: IAttribute;
}

export default IIconAttribute;

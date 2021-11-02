export default function buttonThemes(type, variant) {
  switch (type) {
    case "filled":
      switch (variant) {
        case "primary":
          return "bg-primary hover:bg-primary-dark hover:shadow-md active:bg-primary-darkest text-white border-primary border";
        default:
          return "bg-primary hover:bg-primary-dark hover:shadow-md active:bg-primary-darkest text-white border-primary border";
      }
    case "outlined":
      switch (variant) {
        case "primary":
          return "bg-whtie hover:bg-primary hover:shadow-md active:bg-primary-dark active:border-primary-dark active:text-white hover:text-white focus:ring-2 focus:ring-primary-darkest text-primary border-primary border-2";
        default:
          return "bg-whtie hover:bg-primary hover:shadow-md active:bg-primary-dark active:border-primary-dark active:text-white hover:text-white focus:ring-2 focus:ring-primary-darkest text-primary border-primary border-2";
      }
    default:
      return "bg-primary hover:bg-primary-dark hover:shadow-md active:bg-primary-darkest text-white border-primary border";
  }
}

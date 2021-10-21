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
          return "bg-whtie hover:bg-primary-light hover:shadow-md active:bg-primary hover:text-white focus:ring-2 focus:ring-primary-dark text-primary border-primary border";
        default:
          return "bg-whtie hover:bg-primary-light hover:shadow-md active:bg-primary hover:text-white focus:ring-2 focus:ring-primary-dark text-primary border-primary border";
      }
    default:
      return "bg-primary hover:bg-primary-dark hover:shadow-md active:bg-primary-darkest text-white border-primary border";
  }
}

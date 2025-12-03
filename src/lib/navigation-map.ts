export function mapPageToPath(page: string, id?: string) {
  switch (page) {
    case "home":
      return "/";
    case "buy":
      return "/buy";
    case "developments":
      return "/buy/developments";
    case "development":
      return id ? `/buy/developments/${id}` : "/buy/developments";
    case "unit":
      return id ? `/buy/units/${id}` : "/buy/units";
    case "rent":
      return "/rent";
    case "residential-rentals":
      return "/rent/residential";
    case "rental":
      return id ? `/rent/residential/${id}` : "/rent/residential";
    case "commercial-rentals":
    case "commercial":
      return "/rent/commercial";
    case "commercial-rental":
      return id ? `/rent/commercial/${id}` : "/rent/commercial";
    case "insights":
      return "/insights";
    case "blog-post":
      return id ? `/insights/${id}` : "/insights";
    case "about":
      return "/about";
    case "team":
      return "/about/team";
    case "team-profile":
      return id ? `/about/team/${id}` : "/about/team";
    case "contact":
      return "/contact";
    default:
      return "/";
  }
}

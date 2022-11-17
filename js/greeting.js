function greet(name) {
  if (["Stefan", "Felix", "Thomas"].includes(name)) return "Howdy Coach!";
  if (name === "Dalia") return "Howdy Boss!";
  return `Howdy ${name}`;
}

export { greet };

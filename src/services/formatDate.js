export const formatDate = (value) => {
  const date = new Date(value);
  const day = date.toLocaleString("en-US", { day: "numeric" });
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.toLocaleString("en-US", { year: "numeric" });
  return `${day} ${month} ${year}`;
};

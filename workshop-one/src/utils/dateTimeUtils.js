export const fromIsoDate=(isoDate)=>{
    const date=new Date(isoDate)
    const formatDate=date.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric"
});

return formatDate
}
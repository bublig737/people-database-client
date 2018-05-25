
export const getSelectData = (selector: string): number => {

  return parseInt((<any>M.FormSelect.getInstance(document.querySelector(selector))).$el[0].value)

}

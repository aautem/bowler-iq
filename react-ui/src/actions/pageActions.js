export function changePage(page) {
  console.log('Changing Page.');
  return {
    type: 'CHANGE_PAGE',
    payload: page
  };
};

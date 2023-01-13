export const userDetails = details => ({
    type: 'userDetails',
    data: details,
});

export const currentDrawerPage = text => ({
    type: 'currentDrawerPage',
    data: text
})

export const seletedRows = data => ({
    type: 'currentDrawerPage',
    data,
})

export const editMode = data => ({
    type: 'editMode',
    data,
})

export const allProducts = data => ({
    type: 'allProducts',
    data,
})

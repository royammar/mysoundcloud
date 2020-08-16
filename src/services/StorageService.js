

export default {
    query,
    get,
    post,
    remove,
    save
}

 function query(entityType) {
    let entities =  JSON.parse(localStorage.getItem(entityType)) || []
    return entities
}


 function post(entityType, newEntity) {
    let entities =  query(entityType)
    entities.unshift(newEntity);
    save(entityType, entities)
    return entities;
}

 function get(entityType, entityId) {
let entities= query(entityType)
       let item= entities.find(entity => entity._id === entityId)
       return item
}




 function remove(entityType) {
    let entities =  query(entityType)
       entities.pop()
    save(entityType, entities)
    return entities
}

function save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}



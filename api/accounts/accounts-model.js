const db = require('../../data/db-config')

const getAll = () => {
  // select * from accounts;
  return db('accounts')
}

const getById = id => {
  return db('accounts')
  .where('id', id)
  .first()
}

const create = async account => {
   //insert into accounts (name, budget) values ('newname', 'newbudget')
  const [ id ] = await db('accounts')
  .insert(account)
  return getById(id)
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}

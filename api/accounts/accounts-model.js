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

const updateById = async (id, account) => {
  // update accounts set name = 'example', budget = 40 where id = 1
  await db('accounts')
  .update(account)
  .where('id', id)
  return getById(id)
}

const deleteById = async id => {
  // delete from accounts
  // where id = 3;
  const chopped = await getById(id)
  await db('accounts')
  .where('id', id)
  .delete()
  return chopped
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}

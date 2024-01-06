import React, { useState } from 'react'
import { connect } from 'react-redux'
import IlmiyModal from '../Modals/IlmiyModal'

const Ilmiy_daraja = ({ Ilmiy_daraja, Delete, Edits, Search, SearchDar }) => {

  const [active, setActive] = useState(false)
  const [EditActive, setEditActive] = useState(false)

  const OpenEditModal = () => {
    setEditActive(prev => !prev)
  }

  const Edit = (item) => {
    setEditActive(prev => !prev)
    Edits(item)
  }


  const OpenModal = () => {
    setActive(prev => !prev)
  }

  const Searching = (event) => {
    Search(event.target.value)
  }

  return (
    <div className='container'>
      <h2 className='text-center'>Ilmiy daraja</h2>
      <div className="row my-4">
        <div className="col-3">
          <input type="search" placeholder='search...' className='form-control' onChange={Searching} />
        </div>
        <div className="col-9">
          <button className='btn btn-outline-danger float-end' onClick={OpenModal}>Add</button>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-12">
          <table className='table table-dark'>
            <thead>
              <tr>
                <th>No</th>
                <th>Nomi</th>
                <th>Bonus</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                Ilmiy_daraja.filter((item) => {
                  if (SearchDar === '') {
                    return item
                  } else if (item.nomi.toLowerCase().includes(SearchDar.toLowerCase())) {
                    return item
                  }
                })
                  .map((item, index) =>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.nomi}</td>
                      <td>{item.bonus}</td>
                      <td>
                        <button className='btn btn-sm btn-outline-info' onClick={() => Edit(item)}>edit</button>
                        <button className='btn btn-sm btn-outline-danger mx-2' onClick={() => Delete(index)}>delete</button>
                      </td>
                    </tr>)
              }
            </tbody>
          </table>
          <IlmiyModal OpenModal={OpenModal} active={active} EditActive={EditActive} OpenEditModal={OpenEditModal} />
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    Ilmiy_daraja: state.IlmiyReducer.IlmiyReducer,
    SearchDar: state.IlmiyReducer.search,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    Delete: (index) => {
      dispatch({
        type: 'Delete',
        id: index
      })
    },

    Edits: (item) => {
      dispatch({
        type: 'Edit',
        id: item
      })
    },
    Search: (value) => {
      dispatch({
        type: 'search',
        value: value
      })
    }


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ilmiy_daraja)
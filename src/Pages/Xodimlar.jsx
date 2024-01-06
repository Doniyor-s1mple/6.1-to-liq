import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import XodimlarModal from '../Modals/XodimlarModal'

const Xodimlar = ({ Xodimlar, Delete, edit, search, Search }) => {

  const [modalVisible, setModalVisible] = useState(false)
  const [editModalVisible, setEditModalVisible] = useState(false)

  const OpenModal = () => {
    setModalVisible(prev => !prev)
  }

  const toggleEdit = () => {
    setModalVisible(prev => !prev)
  }

  const editItem = (item) => {
    edit(item)
    setEditModalVisible(prev => !prev)
  }
  const editToggle = (e) => {
    setEditModalVisible(prev => !prev)
  }

  const Searchs = (event) => {
    var value = event.target.value
    search(value)
  }

  return (
    <div className='row mx-5 border border-info'>
      <h2 className='text-center text-info'>Xodimlar</h2>
      <div className="col-3">
        <input onChange={Searchs} type="search" className='form-control' placeholder='search...' />
      </div>
      <div className="col-9">
        <button className='btn btn-outline-info float-end' onClick={OpenModal}>Add</button>
      </div>
      <div className="row my-5">
        <div className="col-12">
          <table className='table table-info'>
            <thead>
              <tr>
                <th>NO</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Phone</th>
                <th>Lavozim</th>
                <th>Ilmiy_daraja</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                Xodimlar.filter((item) => {
                  if (Search === '') {
                    return item
                  } else if (item.firstname.toLowerCase().includes(Search.toLowerCase())) {
                    return item
                  } else if (item.lastname.toLowerCase().includes(Search.toLowerCase())) {
                    return item
                  }
                })
                  .map((item, index) =>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td>{item.phone}</td>
                      <td>{item.lavozim}</td>
                      <td>{item.ilmiy_daraja}</td>
                      <td>
                        <button className='btn btn-warning btn-sm mx-1' onClick={() => editItem(item)}>edit</button>
                        <button className='btn btn-danger btn-sm mx-1' onClick={() => Delete(index)}>del</button>
                      </td>
                    </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
      <XodimlarModal
        modalVisible={modalVisible}
        OpenModal={OpenModal}
        editModalVisible={editModalVisible}
        editToggle={editToggle}
        toggleEdit={toggleEdit}
      />
    </div>

  )
}
function mapStateToPRops(state) {
  return {
    Xodimlar: state.XodimlarReducer.Xodimlar,
    Search: state.XodimlarReducer.search
  }
}

function mapDispatchToProps(dispatch) {
  return {
    Delete: (index) => {
      dispatch({
        type: "delete",
        id: index
      })
    },
    edit: (item) => {
      dispatch({
        type: 'edit',
        item: item,
      })
    },
    search: (value) => {
      dispatch({
        type: 'search',
        value: value
      })
    }
  }
}
export default connect(mapStateToPRops, mapDispatchToProps)(Xodimlar)
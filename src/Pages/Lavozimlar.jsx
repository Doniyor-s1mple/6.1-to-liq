import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import LavozimModal from '../Modals/LavozimModal'

const Lavozimlar = ({ Lavozimlar, edit, Delete, Search, SearchVal }) => {

  const [LavozimActive, setLavozimActive] = useState(false)
  const [EditActive, setEditActive] = useState(false)

  const OpenLavozim = () => {
    setLavozimActive(prev => !prev)
  }

  const EditLavozim = (item) => {
    edit(item)
    setEditActive(prev => !prev)
  }

  const EditToggle = () => {
    setEditActive(prev => !prev)
  }

  var Searching = (event) => {
    Search(event.target.value)
  }

  return (
    <div className='container border border-warning'>
      <h2 className='text-center text-warning'>Lavozim</h2>
      <div className="row my-4">
        <div className="col-3 ">
          <input type="search" className='form-control' placeholder='seach...' onChange={Searching} />
        </div>
        <div className="col-8">
          <button className='btn btn-outline-warning float-end' onClick={OpenLavozim}>Add</button>
        </div>
      </div>

      <div className="row my-4">
        <div className="col-8 offset-2">
          <table className='table table-warning my-4'>
            <thead>
              <tr>
                <th>No</th>
                <th>Nomi</th>
                <th>Maosh</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                Lavozimlar.filter((item) => {
                  if (SearchVal === '') {
                    return item
                  } else if (item.nomi.toLowerCase().includes(SearchVal.toLowerCase())) {
                    return item
                  }

                }).map((item, index) =>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.nomi}</td>
                    <td>{item.maosh}</td>
                    <td>
                      <button className='btn btn-outline-info btn-sm' onClick={() => EditLavozim(item)}>edit</button>
                      <button className='btn btn-outline-danger btn-sm mx-2' onClick={() => Delete(index)}>delete</button>
                    </td>
                  </tr>)
              }
            </tbody>
          </table>
          <LavozimModal LavozimActive={LavozimActive} OpenLavozim={OpenLavozim} EditToggle={EditToggle} EditActive={EditActive} />
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    Lavozimlar: state.Lavozimreducer.Lavozim,
    SearchVal: state.Lavozimreducer.search
  }
}

function mapDispatchToProps(dispatch) {
  return {
    edit: (item) => {
      dispatch({
        type: 'edit',
        id: item,
      })
    },

    Delete: (index) => {
      dispatch({
        type: 'Delete',
        id: index,
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

export default connect(mapStateToProps, mapDispatchToProps)(Lavozimlar)
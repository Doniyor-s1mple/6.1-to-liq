import { AvField, AvForm } from 'availity-reactstrap-validation'
import React from 'react'
import { connect } from 'react-redux'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const IlmiyModal = ({ OpenModal, active, addDaraja, OpenEditModal, EditActive, editDaraja }) => {

    const SubmitForm = (event, values) => {
        addDaraja(values)
        OpenModal()
    }

    const EditSubmitForm = (event, values) => {
        editDaraja(values)
        OpenEditModal()
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-8">
                    {/* Modal for Add */}
                    <Modal isOpen={active} toggle={OpenModal}>
                        <ModalHeader className='bg-dark'>Add User</ModalHeader>
                        <ModalBody className='bg-dark'>
                            <AvForm id='form' onValidSubmit={SubmitForm}>
                                <AvField type='text' name='nomi' label='Nomi' required />
                                <AvField type='text' name='bonus' label='Bonus' required />
                            </AvForm>
                        </ModalBody>
                        <ModalFooter className='bg-dark'>
                            <Button form='form' color='outline-info btn-sm'>ok</Button>
                            <Button color='outline-warning btn-sm' onClick={OpenModal}>cancel</Button>
                        </ModalFooter>
                    </Modal>

                    {/* Modal for Edit */}
                    <Modal isOpen={EditActive} toggle={OpenEditModal}>
                        <ModalHeader className='bg-dark'>Edit User</ModalHeader>
                        <ModalBody className='bg-dark'>
                            <AvForm id='edit' onValidSubmit={EditSubmitForm}>
                                <AvField type='text' name='nomi' label='Nomi' required />
                                <AvField type='text' name='bonus' label='Bonus' required />
                            </AvForm>
                        </ModalBody>
                        <ModalFooter className='bg-dark'>
                            <Button form='edit' color='outline-info btn-sm'>change</Button>
                            <Button color='outline-warning btn-sm' onClick={OpenEditModal} >cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addDaraja: (values) => {
            dispatch({
                type: 'addDaraja',
                nomi: values.nomi,
                bonus: values.bonus
            })
        },

        editDaraja: (values) => {
            dispatch({
                type: 'EditDaraja',
                nomi: values.nomi,
                bonus: values.bonus
            })
        }

    }
}

export default connect(null, mapDispatchToProps)(IlmiyModal)
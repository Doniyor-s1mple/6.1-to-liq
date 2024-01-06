import { AvField, AvForm } from 'availity-reactstrap-validation'
import React from 'react'
import { connect } from 'react-redux'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const LavozimModal = ({ OpenLavozim, LavozimActive, addlavozim, EditActive, EditToggle, editlavozim }) => {

    const SubmitForm = (event, values) => {
        addlavozim(values)
        OpenLavozim()
    }

    const EditSubmitForm = (event, values) => {
        editlavozim(values)
        EditToggle()
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    {/* Modal for Add */}
                    <Modal isOpen={LavozimActive} toggle={OpenLavozim}>
                        <ModalHeader className='bg-dark'>Add Lavozim</ModalHeader>
                        <ModalBody className='bg-dark'>
                            <AvForm id='bb' onValidSubmit={SubmitForm}>
                                <AvField type='text' name='nomi' label='Nomi' required />
                                <AvField type='text' name='maosh' label='Maosh' required />
                            </AvForm>
                        </ModalBody>
                        <ModalFooter className='bg-dark'>
                            <Button form='bb' color='outline-info btn-sm'>ok</Button>
                            <Button color='outline-danger btn-sm' onClick={OpenLavozim}>cancel</Button>
                        </ModalFooter>
                    </Modal>





                    {/* Modal for Edit */}
                    <Modal isOpen={EditActive} toggle={EditToggle}>
                        <ModalHeader className='bg-dark'>Edit Lavozim</ModalHeader>
                        <ModalBody className='bg-dark'>
                            <AvForm id='change' onValidSubmit={EditSubmitForm}>
                                <AvField type='text' name='nomi' label='Nomi' required />
                                <AvField type='text' name='maosh' label='Maosh' required />
                            </AvForm>
                        </ModalBody>
                        <ModalFooter className='bg-dark'>
                            <Button form='change' color='outline-info btn-sm'>change</Button>
                            <Button color='outline-danger btn-sm' onClick={EditToggle}>cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addlavozim: (values) => {
            dispatch({
                type: 'addlavozim',
                nomi: values.nomi,
                maosh: values.maosh
            })
        },

        editlavozim: (values) => {
            dispatch({
                type: 'editlavozim',
                nomi: values.nomi,
                maosh: values.maosh
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(LavozimModal)
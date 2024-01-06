import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap'
import { AvForm, AvField } from 'availity-reactstrap-validation'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const XodimlarModal = ({ OpenModal, modalVisible, addUser, editModalVisible, editToggle, EditUser, toggleEdit, Lavozims, Levels }) => {

    const notify = () => toast.success("Wow so easy!");

    const SubmitForm = (event, values) => {
        addUser(values)
        OpenModal()
        notify()
    }

    const EditSubmitForm = (event, values) => {
        EditUser(values)
        editToggle()
    }

    return (
        <div className='bg-dark'>
            <ToastContainer />
            {/* Modal for Add */}
            <Modal isOpen={modalVisible} toggle={OpenModal}>
                <ModalHeader className='bg-dark'>Xodimlar qo'shish</ModalHeader>
                <ModalBody className='bg-dark'>
                    <AvForm id='form' onValidSubmit={SubmitForm}>
                        <AvField type='text' name='firstname' label='Firstname' required />
                        <AvField type='text' name='lastname' label='Lastname' required />
                        <AvField type='text' name='phone' label='Phone' required />
                        <AvField type='select' name='lavozim' label='Lavozim'>
                            {
                                Lavozims.map(item => <option key={item.id}>{item.nomi}</option>)
                            }
                        </AvField>
                        <AvField type='select' name='ilmiy_daraja' label='Ilmiy daraja'>
                            {
                                Levels.map(item => <option key={item.id}>{item.nomi}</option>)
                            }
                        </AvField>
                    </AvForm>
                </ModalBody>
                <ModalFooter className='bg-dark'>
                    <Button form='form' color='success'>save</Button>
                    <Button color='danger' onClick={OpenModal}>cancel</Button>
                </ModalFooter>
            </Modal>

            {/* Modal for Edit */}
            <Modal isOpen={editModalVisible} toggle={toggleEdit}>
                <ModalHeader className='bg-dark'>Edit Xodim</ModalHeader>
                <ModalBody className='bg-dark'>
                    <AvForm id='edit' onValidSubmit={EditSubmitForm} >
                        <AvField type='text' name='firstname' label='Firstname' required />
                        <AvField type='text' name='lastname' label='Lastname' required />
                        <AvField type='text' name='phone' label='Phone' required />
                        <AvField type='select' name='lavozim' label='Lavozim'>
                            <option>Frontend Dev</option>
                            <option>Backend Dev</option>
                            <option>Mobile Dev</option>
                        </AvField>
                        <AvField type='select' name='ilmiy_daraja' label='Ilmiy daraja'>
                            <option>Junior</option>
                            <option>Middle</option>
                            <option>Senior</option>
                        </AvField>
                    </AvForm>
                </ModalBody>
                <ModalFooter className='bg-dark'>
                    <Button form='edit' color='warning'>change</Button>
                    <Button color='danger' onClick={editToggle}>cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
function mapStateToProps(state) {
    console.log(state);
    return {
        Lavozims: state.Lavozimreducer.Lavozim,
        Levels: state.IlmiyReducer.IlmiyReducer,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addUser: (values) => {
            dispatch({
                type: 'addUser',
                firstname: values.firstname,
                lastname: values.lastname,
                phone: values.phone,
                lavozim: values.lavozim,
                ilmiy_daraja: values.ilmiy_daraja,
            })
        },
        EditUser: (values) => {
            dispatch({
                type: 'editItem',
                firstname: values.firstname,
                lastname: values.lastname,
                phone: values.phone,
                lavozim: values.lavozim,
                ilmiy_daraja: values.ilmiy_daraja,
            })
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(XodimlarModal)
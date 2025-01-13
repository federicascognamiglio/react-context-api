import { useEffect, useState } from 'react'
import axios from 'axios';
//Components
import AppForm from '../../components/AppForm';
import { useNavigate } from 'react-router-dom';

// Valori di partenza Form
const initialFormData = {
    title: "",
    content: "",
    img: "",
    tags: []
};

// API Url
const apiUrl = import.meta.env.VITE_API_URL;

function CreatePostPage() {
    const navigate = useNavigate();

    // Valori per form
    const [formData, setFormData] = useState(initialFormData);
    // Tags
    const [tagsList, setTagsList] = useState([])
    // Check Selezionati
    const [selectedChecks, setSelectedChecks] = useState([]);

    // FUNCTIONS
    // Show Tags
    useEffect(() => getTags(), [])

    // Get Tags
    const getTags = () => {
        axios.get(`${apiUrl}/tags`).then((resp) => {
            setTagsList(resp.data.tags)
        })
    }

    // Submit Handler Function
    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post(`${apiUrl}/posts`, formData).then((resp) => {
            navigate(`/posts/${resp.data.newPost.id}`)
        })
    }

    // Multiple Checkboxes Handler Function
    const handleMultipleCheckbox = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        const updatedChecks = isChecked ? [...selectedChecks, value] : selectedChecks.filter((curValue) => curValue !== value);
        setSelectedChecks(updatedChecks);

        setFormData({
            ...formData,
            tags: updatedChecks,
        });
    }

    // Input Change Handler Function
    const handleChange = (event) => {
        const keyToChange = event.target.name;
        const newValue = event.target.value;
        const newData = {
            ...formData,
            [keyToChange]: newValue
        }
        setFormData(newData)
    }

    return (
        <section className="container pt-5">
            <div>
                <AppForm
                    submitHandler={handleSubmit}
                    data={formData}
                    inputChangeHandler={handleChange}
                    availableTags={tagsList}
                    selectedChecks={selectedChecks}
                    multipleCheckboxHandler={handleMultipleCheckbox}
                />
            </div>
        </section >
    )
}

export default CreatePostPage
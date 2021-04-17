import React from 'react'
import ContactForm from '../components/ContactForm'
import Divider from '../components/Divider'
import MyContactDetails from '../components/MyContactDetails'
import PageLayout from '../layouts/pages'

export default function contact() {
    return (
        <PageLayout>
            <ContactForm />
            <Divider/>
            <MyContactDetails/>
        </PageLayout>
    )
}

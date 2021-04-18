import React from 'react'
import { Helmet } from 'react-helmet'
import ContactForm from '../components/ContactForm'
import Divider from '../components/Divider'
import MyContactDetails from '../components/MyContactDetails'
import PageLayout from '../layouts/pages'
import logo from '../images/icon.png'

export default function contact() {
    return (
        <PageLayout>
            <Helmet>
                <title>Contact | WordWarrior</title>
                <meta name="description" content="Get in touch with WordWarrior" />
                <meta name="image" content={logo} />
                <link rel="shortcut icon" type="image/png" href="image/icon.png"></link>
            </Helmet>
            <ContactForm />
            <Divider/>
            <MyContactDetails/>
        </PageLayout>
    )
}

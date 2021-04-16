import React from 'react'

export default function Link({href,alt,children}) {
    // external Links
    return (
        <a href={href} alt={alt || ''} target='_blank' rel='noopener noreferrer'>{children}</a>
    )
}

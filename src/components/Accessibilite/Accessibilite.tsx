import { ReactElement } from 'react'

import PageTitle from '../shared/PageTitle/PageTitle'

export default function Accessibilite(): ReactElement {
  return (
    <>
      <PageTitle>
        Déclaration d’accessibilité
      </PageTitle>
      <div
        data-hx-swap="outerHTML"
        data-hx-target="this"
      >
        <div>
          <label>
            First Name
          </label>
          : Joe
        </div>
        <div>
          <label>
            Last Name
          </label>
          : Blow
        </div>
        <div>
          <label>
            Email
          </label>
          : joe@blow.com
        </div>
        <button
          className="btn primary"
          data-hx-get="/api/structures?search=ABC"
        >
          Click To Edit
        </button>
      </div>
    </>

  )
}

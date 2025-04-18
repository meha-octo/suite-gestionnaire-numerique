import { ChangeEventHandler, PropsWithChildren, ReactElement } from 'react'

import { LabelValue } from '@/presenters/shared/labels'
import { noop } from '@/shared/lang'

export default function Select<Value extends number | string>({
  ajaxPost,
  ariaControlsId,
  children,
  disabled = false,
  id,
  isPlaceholderSelectable = false,
  name,
  onChange,
  options,
  placeholder = 'Choisir',
  required = false,
}: Props<Value>): ReactElement {
  return (
    <div className="fr-select-group">
      <label
        className="fr-label"
        htmlFor={id}
      >
        {children}
      </label>
      <select
        className="fr-select fr-mb-2w"
        data-hx-post={ajaxPost}
        data-hx-swap="none"
        defaultValue={options.find(({ isSelected }) => Boolean(isSelected))?.value}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange ?? noop}
        required={required}
      >
        <option
          hidden={!isPlaceholderSelectable}
          value=""
        >
          {placeholder}
        </option>
        {
          options.map((option): ReactElement => (
            <option
              aria-controls={ariaControlsId}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))
        }
      </select>
      <div id="role-selectionne" />
    </div>
  )
}

type Props<Value extends number | string> = PropsWithChildren<Readonly<{
  ajaxPost?: string
  ariaControlsId?: string
  disabled?: boolean
  id: string
  isPlaceholderSelectable?: boolean
  name: string
  onChange?: ChangeEventHandler<HTMLSelectElement>
  options: ReadonlyArray<LabelValue<Value>>
  placeholder?: string
  required?: boolean
}>>

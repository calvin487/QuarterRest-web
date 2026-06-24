import { useState, useEffect } from 'react'

export interface FieldConfig {
  key: string
  label: string
  type: 'text' | 'textarea' | 'select'
  options?: { value: string; label: string }[]
  placeholder?: string
}

interface FormModalProps {
  title: string
  fields: FieldConfig[]
  initialValues?: Record<string, string>
  onSubmit: (values: Record<string, string>) => void
  onClose: () => void
}

export default function FormModal({ title, fields, initialValues, onSubmit, onClose }: FormModalProps) {
  const [values, setValues] = useState<Record<string, string>>({})

  useEffect(() => {
    const defaults: Record<string, string> = {}
    fields.forEach(f => {
      defaults[f.key] = initialValues?.[f.key] ?? (f.type === 'select' ? f.options?.[0]?.value ?? '' : '')
    })
    setValues(defaults)
  }, [initialValues])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSubmit(values)
  }

  return (
    <div className="modal-overlay">
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <form onSubmit={handleSubmit} className="modal-form">
          {fields.map(field => (
            <div key={field.key} className="form-group">
              <label className="form-label">{field.label}</label>

              {field.type === 'textarea' ? (
                <textarea
                  className="form-input form-textarea"
                  value={values[field.key] ?? ''}
                  placeholder={field.placeholder}
                  required
                  onChange={e => setValues(v => ({ ...v, [field.key]: e.target.value }))}
                />
              ) : field.type === 'select' ? (
                <select
                  className="form-input form-select"
                  value={values[field.key] ?? ''}
                  onChange={e => setValues(v => ({ ...v, [field.key]: e.target.value }))}
                >
                  {field.options?.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              ) : (
                <input
                  className="form-input"
                  type="text"
                  value={values[field.key] ?? ''}
                  placeholder={field.placeholder}
                  required
                  onChange={e => setValues(v => ({ ...v, [field.key]: e.target.value }))}
                />
              )}
            </div>
          ))}

          <div className="modal-actions">
            <button type="button" className="btn-admin btn-cancel" onClick={onClose}>取消</button>
            <button type="submit" className="btn-admin btn-save">儲存</button>
          </div>
        </form>
      </div>
    </div>
  )
}

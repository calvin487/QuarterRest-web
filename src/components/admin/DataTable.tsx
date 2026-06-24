interface Column {
  key: string
  label: string
}

interface DataTableProps<T extends { id: string }> {
  columns: Column[]
  data: T[]
  onEdit: (item: T) => void
  onDelete: (id: string) => void
}

export default function DataTable<T extends { id: string }>({
  columns,
  data,
  onEdit,
  onDelete,
}: DataTableProps<T>) {
  function handleDelete(id: string) {
    if (window.confirm('確定要刪除這筆資料嗎？')) {
      onDelete(id)
    }
  }

  if (data.length === 0) {
    return <div className="table-empty">尚無資料，點右上角「新增」按鈕加入第一筆</div>
  }

  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col.key}>{col.label}</th>
            ))}
            <th className="col-actions">操作</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              {columns.map(col => (
                <td key={col.key}>
                  <span className="cell-text">
                    {String((item as Record<string, unknown>)[col.key] ?? '')}
                  </span>
                </td>
              ))}
              <td className="col-actions">
                <button className="btn-action btn-edit" onClick={() => onEdit(item)}>編輯</button>
                <button className="btn-action btn-delete" onClick={() => handleDelete(item.id)}>刪除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

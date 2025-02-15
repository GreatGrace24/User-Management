type TableProps = {
  headers: (string | null)[]; // Allow null for empty header cells
  data: Record<string, any>[]; // Array of objects for rows
};

export const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <table className="min-w-full bg-white shadow-md rounded-2xl overflow-hidden">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className="px-4 py-2 bg-gray-100 text-left text-sm text-gray-700"
            >
              {header || ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-50">
            {Object.keys(row).map((key, colIndex) => (
              <td
                key={colIndex}
                className="px-4 py-2 text-sm text-gray-600"
              >
                {row[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

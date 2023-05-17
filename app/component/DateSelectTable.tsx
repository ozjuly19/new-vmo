import React from 'react';

function DateSelectTable() {
    return (
        <table className="table-auto w-full">
            <tbody className="bg-white dark:bg-slate-800">
                <tr>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        {"Sanders County Sheriff's Office"}
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                        6/20/23
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                        110 Clips
                    </td>
                </tr>
                <tr>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        {"Sanders County Sheriff's Office"}
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                        6/19/23
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                        Clips 44
                    </td>
                </tr>
                <tr>
                    <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        {"Sanders County Sheriff's Office"}
                    </td>
                    <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400">
                        6/18/23
                    </td>
                    <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
                        Clips 10
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default DateSelectTable;
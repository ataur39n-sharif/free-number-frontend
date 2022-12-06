import { SearchOutlined } from '@ant-design/icons';
import { Input, Popconfirm, Space, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import Highlighter from 'react-highlight-words';



const AdminNumberComponent = () => {
    const [dataSource, setDataSource] = useState([])
    const [dataChange, setDataChange] = useState(false)
    const [loading, setLoading] = useState(false)
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const handleStatus = async (record) => {
        try {
            // console.log(record)
            const res = await axios.put(`https://api.receivesmsonline.io/number/status/${record.number}`, {
                status: record.status === 'active' ? "inactive" : "active"
            })
            // console.log(res)
            setDataChange(!dataChange)
        } catch (error) {
            console.log(error)
        }
    }

    const columns = [
        {
            title: 'Country Name',
            dataIndex: 'countryName',
            key: 'countryName',
            sorter: (a, b) => a.countryName.length - b.countryName.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Phone number',
            dataIndex: 'number',
            key: 'number',
            ...getColumnSearchProps('number'),

        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            filters: [
                {
                    text: 'Active',
                    value: 'active',
                },
                {
                    text: 'InActive',
                    value: 'inactive',
                },
            ],
            onFilter: (value, record) => record.status.indexOf(value) === 0,
            render: (_, record) =>
                <Button variant={record.status === 'active' ? "success" : "danger"}>{record.status}</Button>
        },
        {
            title: 'Action',
            key: 'operation',
            // fixed: 'right',
            // width: 100,
            render: (_, record) =>
                <Popconfirm title="Sure to change status?" onConfirm={() => handleStatus(record)}>
                    <Button >Change Status</Button>
                </Popconfirm>
        },
    ];

    useEffect(() => {

        axios.get('https://api.receivesmsonline.io/number/list')
            .then(res => {
                let list = []
                res.data?.list?.map((data, i) => {
                    const temp = {
                        key: i,
                        countryName: data.country_name,
                        number: data.phone_number,
                        status: data.status
                    }
                    list.push(temp)
                    setDataSource(list)
                })
            })
            .catch(err => console.log(err))
    }, [dataChange])

    const handleSync = async () => {
        try {
            setLoading(true)
            const res = await axios.get('https://api.receivesmsonline.io/number/sync')
            if (res.data.success) {
                setDataChange(!dataChange)
                setLoading(false)
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div>
            <h5 className='p-5 text-center'>Current Number list({dataSource.length}): <Button onClick={() => handleSync()} variant='info'>{loading ? "Syncing...." : "Sync Number"}</Button></h5>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={{
                    pageSize: 10,
                }}
            />
        </div>
    )
}

export default AdminNumberComponent
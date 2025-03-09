import React from 'react';
import { Form, Input, Select } from 'antd';

const Filter = ({ filters, setFilters }) => {
  return (
    <Form layout="inline" style={{ marginBottom: '20px' }}>
      <Form.Item>
        <Input
          placeholder="Name"
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        />
      </Form.Item>
      <Form.Item>
        <Select
          placeholder="Select Color"
          allowClear
          style={{ width: 120 }}
          onChange={(value) => setFilters({ ...filters, color: value })}
        >
          <Select.Option value="red">Red</Select.Option>
          <Select.Option value="blue">Blue</Select.Option>
          <Select.Option value="yellow">Yellow</Select.Option>
          <Select.Option value="white">White</Select.Option>
          <Select.Option value="purple">Purple</Select.Option>
          <Select.Option value="black">Black</Select.Option>
          <Select.Option value="green">Green</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Input
          type="number"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
        />
      </Form.Item>
      <Form.Item>
        <Input
          type="number"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
        />
      </Form.Item>
    </Form>
  );
};

export default Filter;

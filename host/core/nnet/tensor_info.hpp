#pragma once

#include <assert.h>

#include <string>
#include <unordered_map>
#include <vector>
#include "cnn_info.hpp"
#include "../../shared/json_helper.hpp"
#include "../types.hpp"


// Tensor -> Entry -> Propery

struct TensorInfo
{
    TensorInfo() = delete;

    TensorInfo(nlohmann::json tensor_info)
    {
        tensor_name = tensor_info["name"];

        tensor_data_type = tensor_info["shape"]["data_type"];
        tensor_offset = tensor_info["offset"];
        tensor_idx = tensor_info["idx"];
        tensor_size = size_of_type(tensor_data_type);
        tensor_dimensions = tensor_info["shape"]["dimensions"].get<std::vector<int32_t>>();
        tensor_strides    = tensor_info["shape"]["strides"].get<std::vector<int32_t>>();;
    }

    std::string tensor_name;
    std::vector<int32_t> tensor_dimensions;
    std::vector<int32_t> tensor_strides;

    TensorDataType tensor_data_type;
    size_t tensor_offset;
    size_t tensor_size;
    size_t tensor_idx;
};

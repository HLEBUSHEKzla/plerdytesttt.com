<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true; //to change later
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'brand' => 'required',
            'model' => 'required',
            'price' => 'required',
            'year' => 'required',
            'fuel' => 'required',
            'mileage' => 'required',
            'volume' => 'required',
            'gear' => 'required',
            'transmission' => 'required',
            'description' => 'required'
        ];
    }
}

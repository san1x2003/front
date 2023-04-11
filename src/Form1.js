import React from 'react';
import { UseFrom } from 'react-hook-form';
import { Button, Modal, Form, input } from 'react-bootstrap';


export const Form1 = () => (
    
    
    <>
 
        <h1 style ={{padding:'10px'}}>Форма для заполнения</h1>
     
        <Form style ={{padding:'10px'}}>
            

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputName">ФИО</label>
                    <input type="Name" class="form-control" id="inputFIO" placeholder="" />
                    
                </div>
                <div class="form-group col-md-6">
                    <label for="inputPassword4">Телефон</label>
                    <input class="form-control" id="inputPhone" />
                </div>
            </div>
            <div class="form-group col-md-6">
                <label for="inputAddress">Адрес</label>
                <input type="text" class="form-control" id="inputAddress"  />
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCity">ИНН</label>
                    <input type="text" class="form-control" id="inputINN" />
                </div>
                <div class="form-group col-md-4">
                    <label for="inputProduct">Продукт</label>
                    <select id="inputState" class="form-control">
                        <option selected>Выбрать</option>
                        <option>Предзаказ Iphone 15 Pro</option>
                    </select>
                </div>

            </div>
            

            <button  type="submit" class="f-button f-button - warning" >Продолжить</button>

        </Form>

        

    </>
)
export default Form1;
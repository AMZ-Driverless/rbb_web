/*
 * AMZ-Driverless
 * Copyright (c) 2019 Authors:
 *   - Huub Hendrikx <hhendrik@ethz.ch>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import * as React from 'react';
import Dropdown from './Dropdown';

export default function MiscellaneousFilter(props: { trash: boolean, children?: any, onChange: (trash: boolean) => void }) {
  return (<Dropdown caption={props.children}>
    <form className="rbb-MiscellaneousFilter px-2 py-2">
      <div className="form-row">
        <div className="form-check">
          <label className="form-check-label" htmlFor="viewBagTrash">
            <input className="form-check-input"
                   id="viewBagTrash"
                   type={"checkbox"}
                   checked={props.trash}
                   onChange={(event) => {
                     props.onChange(event.target.checked);
                   }}/> View trash
          </label>
        </div>
      </div>
    </form>
  </Dropdown>);
}
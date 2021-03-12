import styled from '@emotion/styled';
import Datetime from 'react-datetime';
import { css } from '@emotion/react';

import { Colors } from '../../shared/constants/colors';

const dateTimeStyle = (props: any) =>
    css`
        font-family: 'Roboto-Regular';
        box-sizing: border-box;
        border-radius: 10px;
        border: 1px solid ${Colors.LightGray};
        min-height: 50px;
        margin-top: 10px;
        padding-left: 21px;
        color: ${Colors.Dark};
        background-color: ${Colors.White};
        input.form-control {
            padding: 0;
            background: none;
            min-height: 50px;
            box-sizing: border-box;
            font-size: 16px;
            line-height: 19px;
        }
        input.form-control:focus {
            background-image: initial;
        }
            position: relative;
            .rdtPicker {
                -webkit-transition: all 150ms linear;
                -moz-transition: all 150ms linear;
                -o-transition: all 150ms linear;
                -ms-transition: all 150ms linear;
                transition: all 150ms linear;
                margin-top: -20px;
                visibility: hidden;
                display: block;
                opacity: 0;
            }
            &.rdtOpen {
                .rdtPicker {
                    opacity: 1;
                    visibility: visible;
                    margin-top: 0;
                }
            }
            input.form-control {
                border: 0;
                background-size: 0 2px, 100% 1px;
                background-repeat: no-repeat;
                background-position: center bottom, center calc(100% - 1px);
                background-color: rgba(0, 0, 0, 0);
                transition: background 0s ease-out;
                float: none;
                box-shadow: none;
                border-radius: 0;
                width: 100%;
                height: 36px;
                padding: 7px 0;
                line-height: 1.428571429;
                display: block;
                width: 100%;
                color: #555;
            }
            input.form-control:focus {
                outline: none;
                background-size: 100% 2px, 100% 1px;
                box-shadow: none;
                transition-duration: 0.3s;
            }
        .rdtPicker {
            display: none;
            position: absolute;
            width: 260px;
            padding: 4px;
            margin-top: 1px;
            z-index: 99999 !important;
            background: #fff;
            border-radius: 0.125rem;
            box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.2);
            -webkit-background-clip: padding-box;
            background-clip: padding-box;
            min-width: 160px;

            &:before {
                display: inline-block;
                position: absolute;
                width: 0;
                height: 0;
                vertical-align: middle;
                content: '';
                top: -5px;
                left: 10px;
                right: auto;
                color: #ffffff;
                border-bottom: 0.4em solid;
                border-right: 0.4em solid transparent;
                border-left: 0.4em solid transparent;
            }
            &:after {
                border-bottom: 0.4em solid #ffffff;
                border-right: 0.4em solid transparent;
                border-left: 0.4em solid transparent;
                content: '';
                display: inline-block;
                position: absolute;
                top: -5px;
                left: 10px;
            }
        }

        .rdtPicker {
            display: block;
            top: 40px;
        }
        .rdtStatic .rdtPicker {
            box-shadow: none;
            position: static;
        }

        .rdtPicker .rdtTimeToggle {
            text-align: center;
            padding: 5px;
            border-radius: 4px;
        }

        .rdtPicker table {
            width: 100%;
            margin: 0;
            border-color: ${Colors.White} !important;
            border-collapse: collapse;
        }
        .rdtPicker td,
        .rdtPicker th {
            text-align: center;
            padding: 1px;
        }
        .rdtPicker td {
            cursor: pointer;
        }
        .rdtDay {
            height: 30px;
            line-height: 33px;
            width: 30px;
            text-align: center;
            padding: 0px;
            border-radius: 50%;
            &.rdtToday.rdtActive,
            &.rdtActive,
            &.rdtActive:hover {
                background-color: ${Colors.Primary} !important;
                color: ${Colors.White};
                @include shadow-big-color(${Colors.Primary});
            }
        }
        .rdtDays {
            tr {
                .dow {
                    border-bottom: 1px solid #e3e3e3;
                    text-align: center;
                    font-size: 12px;
                    text-transform: uppercase;
                    font-weight: inherit;
                    padding-bottom: 5px;
                    padding-top: 10px;
                }
                .rdtOld,
                .rdtNew {
                    color: $grey-A400;
                }
            }
        }

        .rdtPicker td.rdtDay:hover,
        .rdtPicker td.rdtHour:hover,
        .rdtPicker td.rdtMinute:hover,
        .rdtPicker td.rdtSecond:hover,
        .rdtPicker .rdtTimeToggle:hover {
            background: #eeeeee;
            cursor: pointer;
        }
        .rdtPicker td.rdtToday {
            position: relative;
        }
        .rdtPicker td.rdtActive.rdtToday:before {
            border-bottom-color: #fff;
        }
        .rdtPicker td.rdtDisabled,
        .rdtPicker td.rdtDisabled:hover {
            background: none;
            color: #999999;
            cursor: not-allowed;
        }

        .rdtPicker td span.rdtOld {
            color: #999999;
        }
        .rdtPicker td span.rdtDisabled,
        .rdtPicker td span.rdtDisabled:hover {
            background: none;
            color: #999999;
            cursor: not-allowed;
        }
        .rdtPicker .dow {
            width: 14.2857%;
            border-bottom: none;
        }
        .rdtPicker th.rdtSwitch {
            width: 50px;
            padding: 5px;
            border-radius: 4px;
        }
        .rdtPicker th.rdtNext,
        .rdtPicker th.rdtPrev {
            font-size: 21px;
            vertical-align: top;
            border-radius: 50%;
            line-height: 33px;
        }

        .rdtPicker {
            .dow,
            th.rdtSwitch,
            th.rdtNext,
            th.rdtPrev,
            .rdtTimeToggle {
                color: ${Colors.Primary};
            }
        }

        .rdtPrev span,
        .rdtNext span {
            display: block;
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Chrome/Safari/Opera */
            -khtml-user-select: none; /* Konqueror */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
        }

        .rdtPicker th.rdtDisabled,
        .rdtPicker th.rdtDisabled:hover {
            background: none;
            color: #999999;
            cursor: not-allowed;
        }
        .rdtPicker thead tr:first-child th {
            cursor: pointer;
        }
        .rdtPicker thead tr:first-child th:hover {
            background: #eeeeee;
        }

        .rdtPicker button {
            border: none;
            background: none;
            cursor: pointer;
        }
        .rdtPicker button:hover {
            background-color: #eee;
        }

        .rdtPicker thead button {
            width: 100%;
            height: 100%;
        }

        td.rdtMonth,
        td.rdtYear {
            height: 50px;
            width: 25%;
            cursor: pointer;
        }
        td.rdtMonth:hover,
        td.rdtYear:hover {
            background: #eee;
        }

        .rdtCounters {
            display: inline-block;
        }

        .rdtCounters {
            > div {
                float: left;
                width: 40px;
                font-weight: inherit;
                margin: 3px;
                border-radius: 50%;
            }
            .rdtCounterSeparator {
                width: 0;
                border: 1px solid transparent;
            }
        }

        .rdtCounter {
            height: 100px;
        }

        .rdtCounter {
            width: 40px;
            .rdtCount {
                padding: 7px;
                height: 40px;
                border: 1px solid transparent;
            }
        }
        .rdtCounters {
            .rdtCounter:last-child {
                .rdtCount {
                    color: ${Colors.Primary};
                    border-radius: 50%;
                    border: 1px solid ${Colors.Primary};
                }
            }
        }

        .rdtCounterSeparator {
            padding: 7px;
            line-height: 100px;
        }
        .rdtCounter .rdtBtn {
            line-height: 40px;
            cursor: pointer;
            display: block;
            border-radius: 50%;
            color: $grey-A200;
            -webkit-transition: all 60ms ease-in;
            -moz-transition: all 60ms ease-in;
            -o-transition: all 60ms ease-in;
            -ms-transition: all 60ms ease-in;
            transition: all 60ms ease-in;

            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Chrome/Safari/Opera */
            -khtml-user-select: none; /* Konqueror */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
        }
        .rdtCounter .rdtBtn:hover {
            background: #eee;
            color: #797979;
        }
        .rdtCounter .rdtCount {
            font-size: inherit;
            line-height: 25px;
        }

        .rdtMilli {
            vertical-align: middle;
            padding-left: 8px;
            width: 48px;
        }

        .rdtMilli input {
            width: 100%;
            font-size: inherit;
            margin-top: 37px;
        }
        .rdtMonths,
        .rdtYears {
            padding-bottom: 10px;
            .rdtMonth,
            .rdtYear {
                display: inline-block;
                width: 56px;
                height: 56px;
                line-height: 56px;
                margin: 3px 3px;
                cursor: pointer;
                border-radius: 50%;
                text-align: center;

                &.rdtActive {
                    background-color: ${Colors.Primary};
                    color: ${Colors.White};
                }
            }
        }
        .rdtPicker {
            border-radius: 10px;
        }
        .dow,
        th.rdtPrev,
        th.rdtSwitch,
        th.rdtNext {
            color: ${Colors.Primary};
        }
        td.rdtDay.rdtActive {
            background-color: ${Colors.Primary};
        }
        ${!props.error &&
        `:focus-within {
        border: 1px solid ${Colors.Active};
    }
            `}
        ${props.error &&
        props.error.length &&
        `border-color: ${Colors.Danger};`}
    `;

export const StyledDateTime = styled(Datetime)(dateTimeStyle);

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import sidebarImage from "../assets/rb_545.png";
import sidebarUserImage from "../assets/images.jpeg";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle, Info } from "lucide-react";

function SidebarComponent() {
  return (
    <div className="w-full border-r bg-gray-50/40 p-4 lg:w-80 lg:p-6">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <img
            src={sidebarImage}
            alt="Result"
            className="h-24 w-24 object-cover lg:h-36 lg:w-36"
          />
          <h1 className="text-xl text-purple-500 font-bold lg:text-2xl">
            Your Result!
          </h1>
          <h5 className="text-center text-sm text-gray-500">
            All your insights & details in one place
          </h5>
        </div>

        <Card>
          <CardContent className="p-4 lg:p-6">
            <div className="space-y-6">
              <div className="flex items-center bg-purple-100 gap-2 p-2 rounded-lg justify-between">
                <div className="flex  items-center space-x-2 lg:space-x-4">
                  <div className="bg-purple-500 p-1 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-white lg:h-8 lg:w-8" />
                  </div>
                  <div>
                    <p>
                      <Badge className="text-xs bg-purple-500  text-white lg:text-[8px]">
                        YOU'VE PASSED!
                      </Badge>
                    </p>
                    <p className="text-md font-bold lg:text-lg">
                      <span className="text-xl font-bold lg:text-2xl">136</span>
                      /240
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <Separator orientation="vertical" />
                  <p className="text-sm font-bold lg:text-lg">
                    <span className=" bg-cyan-500 p-1 text-white rounded-lg">
                      76%
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 lg:text-[12px] mt-2">
                    ACCURACY
                  </p>
                </div>
              </div>

              <div className="space-y-4 bg-purple-100 p-2 rounded-lg">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-10 w-10 lg:h-12 lg:w-12">
                    <AvatarImage src={sidebarUserImage} />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Top Score</p>
                    <p className="text-md font-bold lg:text-md">
                      <span className="text-xl font-bold lg:text-2xl">230</span>
                      /240
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex  items-center justify-between  gap-2">
                  <p className="font-medium">Parth Akotkar</p>
                  <p className=" text-gray-500">
                    <Badge className="text-[10px] text-white bg-cyan-500">
                      92% ACCURACY
                    </Badge>
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <h2 className="text-lg font-semibold">Improve your Marks</h2>
                  <p className="text-xs text-gray-500">
                    Improve your score by practicing more.
                  </p>
                </div>
                <Button className="w-full">Practice more</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Revisit Paper</h3>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              Challenge your friends by simply sharing a link to this test
            </p>
          </CardContent>
          <CardContent>
            <Button className="w-full" variant="outline">
              Visit
            </Button>
          </CardContent>
          <CardFooter className="flex items-center gap-2">
            <Info className="size-10" />{" "}
            <p className="text-xs ">
              Instruction for how to upload your handwritten material in given
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default SidebarComponent;
